import { useNavigate, Link } from "react-router-dom";
import { generateToken } from "../../helpers/generateToken";
import * as company from "../../services/companyService";
import { Button, Card, Col, Input, Row, message, Form, Typography } from "antd";
import { rules } from "../../contants";

const { Text } = Typography;

function Register() {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    values.token = generateToken();

    const checkExistEmail = await company.checkExist("email", values.email);
    const checkExistPhone = await company.checkExist("phone", values.phone);

    if (checkExistEmail.length > 0) {
      messageApi.error("Email đã tồn tại!");
    } else if (checkExistPhone.length > 0) {
      messageApi.error("Số điện thoại đã tồn tại!");
    } else {
      const result = await company.createCompany(values);
      if (result) {
        navigate("/login");
      }
    }
  };

  return (
    <>
      {contextHolder}
      <Row justify="center" >
        <Col xs={24} sm={16} md={12} lg={8}>
          <Card
            title={<div style={{ textAlign: 'center' }}>Đăng ký tài khoản</div>}
            style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
          >
            <Form
              onFinish={onFinish}
              layout="vertical"
              style={{ padding: '0 20px' }}
            >
              <Form.Item
                label="Tên công ty"
                name="companyName"
                rules={rules}
                style={{ marginBottom: '15px' }}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={rules}
                style={{ marginBottom: '15px' }}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Số điện thoại"
                name="phone"
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
                  Đăng ký
                </Button>
              </Form.Item>
            </Form>
            <div style={{ textAlign: 'center' }}>
              <Text>
                Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
              </Text>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Register;
