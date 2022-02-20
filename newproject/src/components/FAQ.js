import React from 'react'
import logo from './bg.jpg';

export default function FAQ () {
  return (
    <div className="container mt-5" style={{ backgroundImage: `url(${logo})` ,width:"50%",height:"50%"}}>
        <p className="h1 my-4">Frequently Asked Questions</p>
        <div className="accordion" id="accordionExample">


  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button collapsed"   type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
      <h4>Should I take certain drugs like paracetamol after getting vaccinated? </h4> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      You may take a Paracetamol after getting vaccinated but only if it is advised by physician. Like any vaccine, Covid-19 vaccines can cause side effects, most of which are mild or moderate and go away within a few days. While many may feel tempted to use a painkiller or paracetamol, experts advise against routine use of these. 
      </div>
    </div>
  </div>


  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed"   type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <h4>What measures should I take after getting vaccinated ? </h4> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Drink a lot of water: Staying hydrated is extremely important both before and after your vaccination. Get at least 7 to 8 hours of sleep: When you get vaccinated, the body relies on immune responses to develop protection. It is recommended that recently vaccinated people sleep for at least 7-8 hours as sleep deprivation can result in suppressed immunity since the body rebuilds its defence mechanisms during sleep. 
      </div>
    </div>
  </div>


  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed"   type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <h4>What should I eat after taking the vaccine? </h4>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Eat a well-balanced diet: To avoid serious side effects, a well-balanced diet is essential. Super foods like green vegetables, turmeric, and garlic, that are high in nutrients and boost immunity, should be included in your diet. Seasonal fruits rich in Vitamin C can also aid in fighting the vaccine side effects.   
      </div>
    </div>
  </div>

  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed"   type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
       <h4>What are the side effects of vaccine? </h4>
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Fever, headache, fatigue, and pain at the injection site were the most commonly reported side effects, and overall, most side effects were mild to moderate. However, as with the two-dose or single-dose primary shots, serious side effects are rare but can occur. 
      </div>
    </div>
  </div>


  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed"   type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
       <h4>What to do if injected site swells up and is causing pain?  </h4>
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Eat a well-balanced diet: To avoid serious side effects, a well-balanced diet is essential. Super foods like green vegetables, turmeric, and garlic, that are high in nutrients and boost immunity, should be included in your diet. Seasonal fruits rich in Vitamin C can also aid in fighting the vaccine side effects.   
      </div>
    </div>
  </div>


  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingSix">
      <button className="accordion-button collapsed"   type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
       <h4>From where to get my vaccine certificates?  </h4>
      </button>
    </h2>
    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      You can download vaccination certificate from the Co-WIN portal (cowin.gov.in) or the Aarogya Setu app or through Digi-Locker by following the simple steps. You may do so by using the mobile number used at the time of registration 
      </div>
    </div>
  </div>


  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingSeven">
      <button className="accordion-button collapsed"   type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
       <h4>Am I risk free after taking both the doses of vaccine?  </h4>
      </button>
    </h2>
    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      No, you are not completely risk free even after taking both the doses of vaccine, you can still catch COVID so it is recommended to stay away from crowd and wear mask. 
      </div>
    </div>
  </div>


  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingEight">
      <button className="accordion-button collapsed"   type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
       <h4>What is the effectiveness of Covishield vaccine ?  </h4>
      </button>
    </h2>
    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Based on data provided by the manufacturer, the Astrazeneca-Oxford vaccine, or Covishield, has shown to be 63% effective in an ongoing, large-scale clinical trial.  
      </div>
    </div>
  </div>


  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingNine">
      <button className="accordion-button collapsed"   type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
       <h4>What is the effectiveness Covaxin ? </h4>
      </button>
    </h2>
    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      A study conducted by AIIMS on healthcare professionals, showed Covaxin has a 50% efficacy against symptomatic Covid-19 
      </div>
    </div>
  </div>

  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingTen">
      <button className="accordion-button collapsed"   type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
       <h4>How can I register myself for COVID test? </h4>
      </button>
    </h2>
    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      If you are facing any symptoms of COVID, you can visit any nearby heath center for a COVID test 
      </div>
    </div>
  </div>


  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingEleven">
      <button className="accordion-button collapsed"   type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
       <h4>Why should I get vaccinated ?  </h4>
      </button>
    </h2>
    <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Getting vaccinated against COVID-19 can lower your risk of getting and spreading the virus that causes COVID-19. Vaccines can also help prevent serious illness and death. 
      </div>
    </div>
  </div>



</div>
    </div>
  )
}
