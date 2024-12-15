const NotFoundPage = () => {
  return (
    <main className="h-[calc(100vh-100px)] flex flex-col text-[#1a1a1a]">
      <div className="h-[145px] bg-[#000]"></div>

      <div className="flex-1 flex flex-col gap-5 items-center justify-center text-center">
        <h2 className="text-[40px] leading-10 font-medium text-center">404</h2>
        <p className="text-2xl">Page Not Found</p>
      </div>
    </main>
  );
};

export default NotFoundPage;
