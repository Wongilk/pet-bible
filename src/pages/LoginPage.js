import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import NaverLogin from "../components/NaverLogin";
import KakaoLogin from "../components/KakaoLogin";
const LoginPage = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("not valid email")
        .required("이메일을 입력해주세요"),
      password: Yup.string().required("비밀번호를 입력해주세요"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
      navigate("/");
    },
  });

  return (
    <div>
      <div>
        <h1
          className="subtitle is-3"
          style={{ textAlign: "center", marginTop: "5rem" }}
        >
          로그인
        </h1>
        <p style={{ textAlign: "center" }}>sns 로그인</p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <KakaoLogin />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <NaverLogin />
        </div>

        <p style={{ textAlign: "center", marginTop: "2rem" }}>이메일 로그인</p>
        <form
          onSubmit={formik.handleSubmit}
          style={{ width: "20rem", height: "20rem", margin: "1rem auto" }}
        >
          <div className="field">
            <div className="control">
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="이메일"
                className="input is-rounded input is-black"
              />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="field" style={{ marginTop: "2rem" }}>
            <div className="control">
              <input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="비밀번호"
                className="input is-rounded input is-black"
                autoComplete="off"
              />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <div>
            <button
              style={{ display: "block", marginTop: "2rem", width: "20rem" }}
              type="submit"
              className=" button is-outlined button is-rounded button is-black"
            >
              로그인
            </button>
          </div>

          <div style={{ marginTop: "3rem", textAlign: "center" }}>
            <a style={{ color: "black" }} href="/register">
              회원가입
            </a>
            <span style={{ margin: "auto 2rem" }}>|</span>
            <a style={{ color: "black" }} href="/findPassword">
              비밀번호 찾기
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
