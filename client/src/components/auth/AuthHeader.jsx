const AuthHeader = () => {
    return (
      <header class="flex justify-between items-center p-4 bg-gray-800 text-white mb-6">
        <div class="text-lg font-semibold">My Application</div>
        <button class="bg-white-700 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
          Logout
        </button>
      </header>
    );
  };
  export default AuthHeader;
  