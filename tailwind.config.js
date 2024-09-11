module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Menargetkan semua file di folder src
  ],
    theme: {
      extend: {
        colors: {
          customBlue: '#1E3A8A', // Menambahkan warna kustom
        },
      },
    },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}