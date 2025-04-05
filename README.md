# Favicons 
[YouTube: Colby Fayock | Favicons the right way](https://www.youtube.com/watch?v=SAnLQABTF5A)  

$ npm create vite@latest .
Choose: React  
Choose: JavaScript  
$ npm i  
$ npm run dev  


Create a favicon image with 500px X 500px resolution  
If creating an image in html,  
make sure to use CSS reset:  
  
*{  
    margin:0;  
    padding:0;  
    box-sizing:border-box;  
}  

Save image file as a .PNG file  
Go to: remove.bg  
Remove background  
Download Free (max 500x500)  
Save to /public directory  

go to: realfavicongenerator.net  
Favicon Path: leave blank  
Click Button "Download"  
Download into /public directory  
Extract .zip file  
Move all files from /favicon to /public  
Delete /favicon folder  
Delete favicon.zip  
Delete vite.svg  
Copy 5 <link rel=""> 1 <meta>  
Go to index.html and replace the <link rel="icon"> line  

In App.jsx delete:  
import viteLogo from '/vite.svg'  
  
<a href="https://vite.dev" target="_blank">  
    <img src={viteLogo} className="logo" alt="Vite logo" />  
</a>  

Possibly might need to: Safari > Develop > Empty Caches  
or also restart React server  


