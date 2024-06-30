import * as company from "../../services/companyService";
import { setCookie } from "../../helpers/cookie";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkAuthen } from "../../actions/authentication";
import { Button, Card, Col, Form, Input, Row, message, Typography } from "antd";
import { rules } from "../../contants";

const { Text } = Typography;

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values) => {
    const data = await company.login(values.email, values.password);
    if (data.length > 0) {
      const time = 1;
      setCookie("id", data[0].id, time);
      setCookie("companyName", data[0].companyName, time);
      setCookie("email", data[0].email, time);
      setCookie("token", data[0].token, time);
      dispatch(checkAuthen(true));
      navigate("/");
    } else {
      messageApi.error("Tài khoản hoặc mật khẩu không chính xác!");
    }
  };

  return (
    <>
      {contextHolder}

      <Row justify="center" style={{ marginTop: '50px' }}>
        <Col xs={24} sm={16} md={12} lg={8}>
          <Card
            title={<div style={{ textAlign: 'center' }}>Đăng nhập</div>}
            style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
          >
            <Form
              onFinish={onFinish}
              layout="vertical"
              style={{ padding: '0 20px' }}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={rules}
                style={{ marginBottom: '15px' }}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={rules}
                style={{ marginBottom: '15px' }}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block style={{ marginBottom: '10px' }}>
                  Đăng nhập
                </Button>
              </Form.Item>
            </Form>
            <div style={{ textAlign: 'center' }}>
              <Text>
                Chưa có tài khoản? <Link to="/register">Đăng ký</Link>
              </Text>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Login;
