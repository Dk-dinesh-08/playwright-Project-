const{test,except, expect}= require('@playwright/test');//import the required files

test('Home Page',async ({page})=>{
    await page.goto('https://www.demoblaze.com/');// it is used to click the link
    const PageTittle=page.title();//it is  used for get the tittle
    console.log('Page title',PageTittle);//it is use for print the title

    await expect(page).toHaveTitle('STORE');//validation 
    const pageUrl = page.url();//to get the url
    console.log(pageUrl);
    await expect(page).toHaveURL('https://www.demoblaze.com/');
    await page.close();

})