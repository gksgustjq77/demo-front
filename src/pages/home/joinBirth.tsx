import { useLocation, Link } from "react-router-dom"; // 추가된 부분
import "./joinBirth.scss";
import React, { useState, useMemo, useCallback } from "react";
const Joinbirth = () => {
  const location = useLocation();
  const props = location.state;
  const [form, setForm] = useState({
    year: 2023,
    month: "1",
    day: "1",
  });
  const now = new Date();

  let years = [];
  for (let y = now.getFullYear(); y >= 1930; y -= 1) {
    years.push(y);
  }

  let month = [];
  for (let m = 1; m <= 12; m += 1) {
    if (m < 10) {
      // 날짜가 2자리로 나타나야 했기 때문에 1자리 월에 0을 붙혀준다
      month.push(m.toString() + "월");
    } else {
      month.push(m.toString() + "월");
    }
  }
  let days = [];
  let date = new Date(form.year, Number(form.month), 0).getDate();
  for (let d = 1; d <= date; d += 1) {
    if (d < 10) {
      // 날짜가 2자리로 나타나야 했기 때문에 1자리 일에 0을 붙혀준다
      days.push(d.toString());
    } else {
      days.push(d.toString());
    }
  }
  return (
    <>
      <div>
        <div className="birth-root">
          <div className="birth-wrap">
            <div className="birth-img-wrap"></div>
            <span className="ment">생일 추가</span>
            <div className="description1">
              <span>공개 프로필에 포함되지 않습니다.</span>
              <br />
              <Link to="" style={{ textDecoration: "none", color: "#35a3ff" }}>
                왜 생일 정보를 입력해야 하나요?
              </Link>
            </div>
            <br />
            <div className="birth-select">
              <select
                value={form.year}
                onChange={(e) =>
                  setForm({ ...form, year: Number(e.target.value) })
                }
              >
                {years.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
              <select
                value={form.month}
                onChange={(e) => {
                  setForm({ ...form, month: e.target.value.replace("월", "") });
                }}
              >
                {month.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
              <select
                value={form.day}
                onChange={(e) => setForm({ ...form, day: e.target.value })}
              >
                {days.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Joinbirth;
