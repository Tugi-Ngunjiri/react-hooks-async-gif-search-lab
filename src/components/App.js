import React from "react";
import NavBar from "./NavBar";
import Giftlist from "./Giftlist";
import Giftlistcontainer from "./Giftlistcontainer"
import Giftsearch from "./Giftsearch"

// the App component should render out the GifListContainer component

function App() {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
     
    </div>

 );
  }
 componentDidMount(){
  fetch("https://www.google.com/search?sa=X&bih=715&biw=800&hl=en&q=random+dogs+link&tbm=isch&source=univ&fir=bB7TUwlJ4I9XiM%252CG75IHBrOMq16wM%252C_%253B6_QT1I1zdBwATM%252C5QCv-k8VIAgk5M%252C_%253BnNzrDZWY32g8IM%252CgokQE66RnnujcM%252C_%253B_1RgNNjhx2aB5M%252CSX8SvpeFrsJjhM%252C_%253B75oqB7lnxk-7tM%252CYyPxpGj3BJD_4M%252C_%253BrNIuBMw-2KCXSM%252CRvcggyvJ00Wf-M%252C_%253BKWzVGv0DvHm8DM%252CTYewFmkPhuMTfM%252C_%253BoZezwnd-YG8ERM%252Cvvw7cBwudtjueM%252C_%253B_OW3UuwCGju8jM%252C-S2qnzIonQD9mM%252C_%253B4cAmkRhU5Aw6CM%252C-dKkBrHxU6W-gM%252C_&usg=AI4_-kTQa9oR-IYDf9onqVmMMjNVsYlqQA&ved=2ahUKEwi7tsysy9T8AhVG57sIHX8YBKcQjJkEegQICxAC")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.items
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        
        });
      }
    )
    }

// Note: the empty deps array [] means
// this useEffect will run once
// similar to componentDidMount()
useEffect(() => {
  fetch("https://www.google.com/search?sa=X&bih=715&biw=800&hl=en&q=random+dogs+link&tbm=isch&source=univ&fir=bB7TUwlJ4I9XiM%252CG75IHBrOMq16wM%252C_%253B6_QT1I1zdBwATM%252C5QCv-k8VIAgk5M%252C_%253BnNzrDZWY32g8IM%252CgokQE66RnnujcM%252C_%253B_1RgNNjhx2aB5M%252CSX8SvpeFrsJjhM%252C_%253B75oqB7lnxk-7tM%252CYyPxpGj3BJD_4M%252C_%253BrNIuBMw-2KCXSM%252CRvcggyvJ00Wf-M%252C_%253BKWzVGv0DvHm8DM%252CTYewFmkPhuMTfM%252C_%253BoZezwnd-YG8ERM%252Cvvw7cBwudtjueM%252C_%253B_OW3UuwCGju8jM%252C-S2qnzIonQD9mM%252C_%253B4cAmkRhU5Aw6CM%252C-dKkBrHxU6W-gM%252C_&usg=AI4_-kTQa9oR-IYDf9onqVmMMjNVsYlqQA&ved=2ahUKEwi7tsysy9T8AhVG57sIHX8YBKcQjJkEegQICxAC")
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setItems(result);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
}, [])

  

export default App;
