$(document).ready(function(){
  $.get('/api/widgets', (data) => {
    console.log("data", data);
  });
}
)
