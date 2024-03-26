import { useNavigate } from "react-router-dom";
import { generateToken } from "../../helpers/generateToken";
import * as company from "../../services/companyService";
import { Button, Card, Col, Input, Row, message, Form } from "antd";
import { rules } from "../../contants";

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
      <Row justify="center">
        <Col span={12}>
          <Card title="Đăng ký tài khoản">
            <Form onFinish={onFinish} layout="vertical">
              <Form.Item label="Tên công ty" name="companyName" rules={rules}>
                <Input />
              </Form.Item>

              <Form.Item label="Email" name="email" rules={rules}>
                <Input />
              </Form.Item>

              <Form.Item label="Số điện thoại" name="phone">
                <Input />
              </Form.Item>

              <Form.Item label="Password" name="password" rules={rules}>
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Đăng ký
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Register;
