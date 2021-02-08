//index.js
window.addEventListener("DOMContentLoaded", () => {
      var cachedValue = localStorage.getItem("sequence_html") ?? "";
      document.getElementById('analysis_results').innerHTML = cachedValue;
    });
	
$('#startAnalysis').click(function(){
	//takes vale from DNA input
	var inputSequence = document.getElementById('sequence').value
	postSequence(inputSequence);
});

//see the change in div when DNA is added to search
var target = document.getElementById('analysis_results');
var observer = new MutationObserver(function(mutations){
	//console.log(target.innerHTML);
	analysis_html = target.innerHTML;
	localStorage.setItem("sequence_html",analysis_html);
});
var config = { attributes: true, childList: true, characterData: true };
observer.observe(target,config);

var analysis_html = '';
function postSequence(inputSequence){
		$.ajax({
			type: 'GET',
			url: '/dna_to_protien/',
			data:{'param': inputSequence },
			success: function(data){
				//creates a new line for the input that is being processed
				document.getElementById('analysis_results').innerHTML += "DNA sequence: "+inputSequence +"&nbsp;&nbsp; Protien: "+ data +"<br>"
			}
		});
		//clears input box
	    document.getElementById('sequence').value = ''
	}