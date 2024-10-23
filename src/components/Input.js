export const Input = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <p className="font-semibold text-2xl">Бүртгүүлэх</p>
      <div className="flex flex-col gap-4">
        <label htmlFor="name">
          <input
            type="text"
            color="##FFFFFF "
            id="name"
            placeholder="Нэр"
            className="w-full  h-[34px] border-solid border rounded-[18px]  py-1 px-3"
            required
          />
        </label>
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            placeholder=" Имэйл хаяг"
            className="w-full h-[34px] border-solid border rounded-[18px]  py-1 px-3"
            required
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            placeholder="Нууц үг"
            className="w-full h-[34px] border-solid border rounded-[18px]  py-1 px-3"
            required
          />
        </label>
        <label htmlFor="confirm-password">
          <input
            type="password"
            id="confirm-password"
            placeholder="Нууц үг давтах"
            className="w-full h-[34px] border-solid border rounded-[18px] py-1 px-3"
            required
          />
        </label>
        <div className="flex flex-col pl-4 ">
          <ul className="list-disc flex flex-col gap-2">
            <li className="text-[#71717A]">Том үсэг орсон байх</li>
            <li className="text-[#71717A]">Жижиг үсэг орсон байх</li>
            <li className="text-[#71717A]">Тоо орсон байх</li>
            <li className="text-[#71717A]">Тэмдэгт орсон байх</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <button
            type="submit"
            className="bg-blue-600 rounded-[18px] w-[334px] h-[36px]">
            Үүсгэх
          </button>
        </div>
      </div>
      <button
        type="button"
        className="border-solid border border-blue-600 rounded-[18px] w-[334px] h-[36px]">
        Нэвтрэх
      </button>
    </div>
  );
};
