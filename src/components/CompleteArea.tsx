export const CompleteArea = () => {
  return (
    <div className="rounded-md bg-secondary min-h-50 mt-2 py-2 px-4">
      <h4 className="text-gray-600 text-center font-bold">完了のTODO</h4>
      <ul className="mt-3">
        <li>
          タスク２
          <button className="bg-gray-200 py-1 px-2 rounded-md ml-1 hover:bg-active hover:text-white hover:cursor-pointer">
            戻す
          </button>
        </li>
      </ul>
    </div>
  );
};
