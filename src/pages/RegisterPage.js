import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../store";
import { useDispatch, useSelector } from "react-redux";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  console.log(user);
  const dbcheckBtnClick = () => {
    console.log("dbcheck");
  };
  const formik = useFormik({
    initialValues: {
      nickName: "",
      email: "",
      password: "",
      passwordCheck: "",
    },
    validationSchema: Yup.object({
      nickName: Yup.string()
        .max(10, "must be less than 10 characters")
        .required("닉네임을 입력해주세요"),
      email: Yup.string()
        .email("must be valid email")
        .required("이메일을 입력해주세요"),
      //8자 이상 대문자 + 소문자 + 특수문자
      password: Yup.string()
        .min(8, "password must be longer than 8 characters")
        .matches(/\d+/, "there is no number")
        .matches(/[a-z]+/, "there is no lowercase")
        .matches(/[A-Z]+/, "there is no uppercase")
        .matches(/[!@#$%^&*()-+]+/, "there is no special characters")
        .required("8자 이상 대문자 + 소문자 + 특수문자를 입력해주세요"),
      passwordCheck: Yup.string()
        .oneOf([Yup.ref("password"), null], "password is not matched")
        .required("비밀번호를 다시 입력해주세요"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(registerUser(values)).then((response) => {
        if (response.meta.requestStatus === "fulfilled") {
          resetForm();
          alert("회원가입 되었습니다.");
        }
      });
    },
  });

  return (
    <div>
      <h1
        className="subtitle is-3"
        style={{ textAlign: "center", marginTop: "5rem" }}
      >
        회원가입
      </h1>

      <form
        onSubmit={formik.handleSubmit}
        style={{ width: "20rem", height: "20rem", margin: "2rem auto" }}
      >
        <div>
          <div style={{ display: "flex" }}>
            <input
              type="text"
              name="nickName"
              value={formik.values.nickName}
              onChange={formik.handleChange}
              placeholder="10자 이하의 닉네임"
              className="input is-rounded input is-black"
            />
            <button
              style={{ marginLeft: "0.2rem" }}
              type="button"
              className=" button is-outlined button is-rounded button is-black"
              onClick={dbcheckBtnClick}
            >
              중복확인
            </button>
          </div>
          {formik.touched.nickName && formik.errors.nickName ? (
            <div>{formik.errors.nickName}</div>
          ) : null}

          <div className="field" style={{ marginTop: "2rem" }}>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="이메일"
              className="input is-rounded input is-black"
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="field" style={{ marginTop: "2rem" }}>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="8자 이상 대문자 + 소문자 + 특수문자"
              className="input is-rounded input is-black"
              autoComplete="off"
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>

          <div className="field" style={{ marginTop: "2rem" }}>
            <input
              type="password"
              name="passwordCheck"
              value={formik.values.passwordCheck}
              onChange={formik.handleChange}
              placeholder="비밀번호 확인"
              className="input is-rounded input is-black"
              autoComplete="off"
            />
            {formik.touched.passwordCheck && formik.errors.passwordCheck ? (
              <div>{formik.errors.passwordCheck}</div>
            ) : null}
          </div>

          <button
            style={{ display: "block", marginTop: "2rem", width: "20rem" }}
            type="submit"
            className=" button is-outlined button is-rounded button is-black"
          >
            회원 가입
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
