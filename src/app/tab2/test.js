import * as Tesseract from 'tesseract.js'
export async function recognizeImage (pic)  {
  
    this.recText = "loading"
    Tesseract.recognize(pic)
    .catch(err =>  {
      console.error(err ) 
      return "err";
    } 
    )
    .then(result => {
      var t = result["data"].text;
      console.log("3")
      localStorage.setItem("text", t);
      return t;
    //  this.imageText = result.text;
    })
    .finally(resultOrError => {
      console.log("4")
  //    this.progress.complete();
    })
    return ""
 }


 
