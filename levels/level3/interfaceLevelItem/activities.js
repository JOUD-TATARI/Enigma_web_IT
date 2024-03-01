window.scrollTo({
    top:750,
    left:100,
    behavior:"smooth"
});

document.querySelector(".header-bar").onclick=function()
{
  document.querySelector(".list-bar").style.display="block"
  document.querySelector(".list-bar").style.zIndex="1000000000000";
  
}
document.querySelector(".div2-list-bar-levels-icon .hide").onclick=function()
{

    document.querySelector(".div2-list-bar-levels-hidden").style.display="block"
    document.querySelector(".div2-list-bar-levels-icon .hide").style.display="none"
    document.querySelector(".div2-list-bar-levels-icon .visible").style.display="inline"
  
}
document.querySelector(".div2-list-bar-levels-icon .visible").onclick=function()
{
   document.querySelector(".div2-list-bar-levels-hidden").style.display="none"
    document.querySelector(".div2-list-bar-levels-icon .hide").style.display="inline"
    document.querySelector(".div2-list-bar-levels-icon .visible").style.display="none"
}
document.querySelector(".div1-list-bar").onclick=function()
{
  document.querySelector(".list-bar").style.display="none"
  document.querySelector(".list-bar").style.zIndex="-100"
}
