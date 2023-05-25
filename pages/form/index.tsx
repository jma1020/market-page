function Form() {
  return (
    <div>
      <form className="flex flex-col space-y-2 bg-blue-500 p-5 focus-within:bg-blue-100">
        <input type="text" disabled className="disabled:opacity-0" />
        <input
          type="text"
          required
          placeholder="이름"
          className="required:border-4 border-yellow-600 invalid:bg-red-500 placeholder-shown:bg-teal-500"
        />
        <input type="password" required placeholder="비밀번호" />
        <input type="submit" value="login" className="bg-white" />
      </form>

      <form className="flex flex-col space-y-2 p-5">
        <input
          type="text"
          required
          placeholder="이름"
          className="border p-1 border-gray-400 rounded-xl peer "
        />
        <span className="hidden peer-invalid:block peer-invalid:text-red-500">
          This input is invalid
        </span>

        <input
          type="text"
          required
          placeholder="이름"
          className="border p-1 border-gray-400 rounded-xl peer"
        />
        <span className="peer-invalid:text-yellow-500">테스트</span>
        <input type="submit" value="login" />
      </form>
    </div>
  );
}

export default Form;
