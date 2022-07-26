import React from "react";

export default function Auth() {
  return (
    <div className="flex justify-center text-center mt-[100px] flex-col">
      <div className="text-3xl font-extrabold">Авторизация</div>
      <form
        action=""
        className="flex flex-col w-2/3 m-auto shadow-2xl border-2 border-black shadow-slate-600 opacity-50 rounded-md text-black"
      >
        <label htmlFor="" className="text-left pl-2 pt-2">
          Логин
        </label>
        <input
          id="login"
          className="mx-2  border border-slate-400 m-0"
          type="text"
        />
        <label htmlFor="passwd" className="text-left pl-2 pt-2">
          Пароль
        </label>
        <input
          id="passwd"
          className="mx-2 border border-slate-400 m-0"
          type="password"
        />
        <div>
          <button type="submit" className="bg-green-600 rounded-md px-2 m-2">
            Войти
          </button>
          <button className="bg-red-600 rounded-md px-2 m-2">
            Забыл пароль
          </button>
        </div>
      </form>
    </div>
  );
}
