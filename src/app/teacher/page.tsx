"use client";
import { Button, Form, Layout } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Content, Header } from "antd/es/layout/layout";
import { useState } from "react";

const questionExtractionRegex =
  /\b(Q:|Question:|Q\s?-\s?\d+|Q\d+\.)\s*(.*?)\s*(?=(Q:|Question:|Q\s?-\s?\d+|Q\d+\.)|$)/gi;

const Teachers = (): JSX.Element => {
  const [assingmentQuestions, setAssignmentQuestions] = useState<string>();
  return (
    <Layout>
      <Header prefix="Assignment Portal"></Header>
      <Content>
        <h2>Please enter questions you </h2>
        <Form>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <TextArea
              onChange={(el) => setAssignmentQuestions(el.target.value)}
            ></TextArea>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => {
                const questionList = assingmentQuestions
                  ?.split(questionExtractionRegex)
                  .filter((val) => val && !val.match(questionExtractionRegex));
                console.log({ questionList });
              }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default Teachers;
