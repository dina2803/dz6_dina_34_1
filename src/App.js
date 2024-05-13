import MainPage from "./pages/mainPage/MainPage";
import 'bootstrap/dist/css/bootstrap.min.css'

export const containerVariants = {
    mid: 'mid',
    small: 'small',
    large: 'large'
}
function App() {
  return (
      <>
          <MainPage />
      </>
  );
}
export default App;