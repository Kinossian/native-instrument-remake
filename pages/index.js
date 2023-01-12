import BannierePub from '../components/banniere-pub';
import HomePromotionsContainer from '../module/home-promotions-section/container';


const Index = () => {
  const init2 = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pseudo: "From Scratch",
      age: 25,
    }),
    mode: "cors",
    credentials: "same-origin",
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/users/", init2).then(() =>
      console.log("data envoyée")
    );
  }

  return (
    <>
      <BannierePub />
      <HomePromotionsContainer />
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="submit" />
      </form>
    </>
  );
};

export default Index;

