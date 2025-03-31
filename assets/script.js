function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript loaded");

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const pageId = e.target.dataset.page;
        
            navigateToPage(pageId);
            // Update URL without reload
            history.pushState({page: pageId}, '', `#${pageId}`);
        });
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', (e) => {
        if (e.state && e.state.page) {
           
            navigateToPage(e.state.page);
        }
    });

    // Handle direct access with hash
    const hash = window.location.hash.slice(1);
    if (hash) {
        
        navigateToPage(hash);
    }
});
function ff(num) {
    if (num == 0) {
    return (1)
    }
    else if (num > 1) {
      return(num*ff(num-1))
    
    
      }
    else{
      return(num)
    
    
    }}

function navigateToPage(pageId) {
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        
        page.classList.remove('active');
    });
    
    // Show selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
       
        selectedPage.classList.add('active');
    } else {
        console.error(`Page not found: ${pageId}`);
    }
}

async function calc(){
    let sum= new Decimal(0)
        let negone = new Decimal(-1)
        let one = new Decimal(1)

        let two = new Decimal(2)

    window.history.replaceState(null, "", window.location.pathname);
    const start = performance.now()
    const formula = document.querySelector('input[name="formula"]:checked').value
    let precision = document.getElementById('precision').value
    const n = document.getElementById('n').value
    precision = Number(precision)
    const interval = document.getElementById('interval').value
    console.log(typeof precision )
    Decimal.set({ precision: precision });

    if (formula === "leib") {
        console.log(100%interval==0)
        

        for (let i =0; i<n; i++){
            let iv = new Decimal(i)

            sum = sum.plus((negone.pow(iv)).div((two.times(iv)).plus(one)))

    
    
            if (i%interval==0){
                await delay(0)

                document.getElementById("pivalue").innerText=(sum.times(4))            }

            }
            

            }
    else if (formula=="euler"){
        let sum= new Decimal(0)

        
        
        for (let i =0; i<100; i++){
        let iv = new Decimal(i)

        sum = sum.plus( (((ff(iv)).pow(two)).times((two**(iv-one)))).div(ff((two*iv+one))))
        if (i%10 === 0){
          console.log(4*sum)
        
        }}

    }
    const end = performance.now()
    document.getElementById('time').innerText= `Time: ${(((end-start)/1000)).toFixed(3)} seconds`   





    }
    




