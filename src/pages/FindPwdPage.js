import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const FindPwdPage = () => {
  const [sendCode, setSendCode] = useState(false);
  const [codeCheck, setCodeCheck] = useState(false);
  const handleSendEmailBtnClick = () => {
    setSendCode(true);
    //이메일 보내기
  };

  const handleVerifyCodeBtnClick = () => {
    //코드 비교
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      verifyCode: "",
      newPwd: "",
      newPwdCheck: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("must be valid email")
        .required("이메일을 입력해주세요"),
      verifyCode: Yup.string().required("인증 코드를 입력해주세요"),
      newPwd: Yup.string()
        .min(8, "password must be longer than 8 characters")
        .matches(/\d+/, "there is no number")
        .matches(/[a-z]+/, "there is no lowercase")
        .matches(/[A-Z]+/, "there is no uppercase")
        .matches(/[!@#$%^&*()-+]+/, "there is no special characters")
        .required("8자 이상 대문자 + 소문자 + 특수문자를 입력해주세요"),
      newPwdCheck: Yup.string()
        .oneOf([Yup.ref("newPwd"), null], "password is not matched")
        .required("비밀번호를 다시 입력해주세요"),
    }),
    onSubmit: (values) => {
      //비밀번호 변경
      console.log(values);
    },
  });

  return (
    <div>
      <h1
        className="subtitle is-3"
        style={{ textAlign: "center", marginTop: "5rem" }}
      >
        비밀번호 찾기
      </h1>

      <form
        onSubmit={formik.handleSubmit}
        style={{ width: "20rem", height: "20rem", margin: "2rem auto" }}
      >
        <div style={{ display: "flex" }}>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="이메일"
            className="input is-rounded input is-black"
          />

          <button
            style={{ marginLeft: "0.2rem" }}
            className=" button is-outlined button is-rounded button is-black "
            onClick={handleSendEmailBtnClick}
          >
            코드발송
          </button>
        </div>
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        {sendCode ? (
          <>
            <div style={{ display: "flex", marginTop: "1rem" }}>
              <input
                type="text"
                name="verifyCode"
                value={formik.values.verifyCode}
                onChange={formik.handleChange}
                placeholder="인증 코드"
                className="input is-rounded input is-black"
              />
              <button
                style={{ marginLeft: "0.2rem" }}
                className=" button is-outlined button is-rounded button is-black"
                onClick={handleVerifyCodeBtnClick}
              >
                코드확인
              </button>
            </div>
            {formik.touched.verifyCode && formik.errors.verifyCode ? (
              <div>{formik.errors.verifyCode}</div>
            ) : null}

            <div style={{ marginTop: "1rem" }}>
              <input
                type="password"
                name="newPwd"
                value={formik.values.newPwd}
                onChange={formik.handleChange}
                placeholder="새로운 비밀번호"
                className="input is-rounded input is-black"
              />
              {formik.touched.newPwd && formik.errors.newPwd ? (
                <div>{formik.errors.newPwd}</div>
              ) : null}
              <input
                type="password"
                name="newPwdCheck"
                value={formik.values.newPwdCheck}
                onChange={formik.handleChange}
                placeholder="새로운 비밀번호 확인"
                className="input is-rounded input is-black"
                style={{ marginTop: "1rem" }}
              />
              {formik.touched.newPwdCheck && formik.errors.newPwdCheck ? (
                <div>{formik.errors.newPwdCheck}</div>
              ) : null}
            </div>
            <button
              type="submit"
              className=" button is-outlined button is-rounded button is-black"
              style={{ margin: "auto", width: "20rem", marginTop: "1rem" }}
            >
              비밀번호 변경
            </button>
          </>
        ) : null}
      </form>
    </div>
  );
};

export default FindPwdPage;
