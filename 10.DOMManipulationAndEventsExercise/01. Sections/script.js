function create(words) {
   for (value of words) {
      const div = document.createElement('div');
      const pr = document.createElement('p');
      pr.textContent = value;
      pr.style.display = 'none';
      div.appendChild(pr);
      document.querySelector('#content').appendChild(div);

      div.addEventListener('click', viewInput);
   }

   function viewInput(e) {
      const currentDiv = e.currentTarget.firstChild;
      currentDiv.style.display = '';
   }
}