// create the Array of project Object
const cardsdata = [
  {
    id: 'card1',
    title: 'Tonic',
    imagesrc: 'image/tonic.png',
    company: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    popdescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
  },
  {
    id: 'card2',
    title: 'Multi-Post Stories',
    imagesrc: 'image/portfolio ability-j.jpg',
    company: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    popdescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
  },
  {
    id: 'card3',
    title: 'Tonic',
    imagesrc: 'image/Snapshoot Portfolio.yoga.jpg',
    company: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    popdescription:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
  },
  {
    id: 'card4',
    title: 'Multi-Post Stories',
    imagesrc: 'image/Portfolio multi.jpg',
    company: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    popdescription:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
  },
];

let cardHtml = '';
cardsdata.forEach((project) => {
  cardHtml += `
  <div class="data-container">
  <div class="data-boss">
        <div class="data-img">
          <img class="photo" src="${project.imagesrc}" alt="image1">
        </div>
        <div class="data-header">
          <h3 class="data-head">${project.title}</h3>
          <div class="data-canopy">
            <h6>${project.company}</h6>
            <div>●</div>
            <h6>${project.role}</h6>
            <div>●</div>
            <h6>${project.year}</h6>
          </div>
          <div class="data-para">
          <p>${project.description}</p>
          <div class="languages">
          <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <button class="button-cd" type="submit" id="${project.id}"> See project</bitton>
        </div>
      </div>
    </div>`;
});

const cardsdataContainerSection = document.getElementById('data-container-Section');
cardsdataContainerSection.innerHTML = cardHtml;

const popUpWindow = document.querySelector('.popup-win-container');
const openWindow = function () {
  popUpWindow.classList.add('open-window');
};

function Selection(e) {
  if (e.target.id !== null) {
    const carditem = cardsdata.find((projects) => projects.id === Number(e.target.id));
    if (carditem !== undefined) {
      const popUpCardHhtml = `
      <div class="pop-data-container">
          <div class="pop-data">
          <h2>${carditem.title}</h2>
            <img id="cancel" src="image" atl="cancel">
            </div>
          <div class="pop-canopy">
          <h6>${carditem.company}</h2>
            <div>●</div>
            <h6>${carditem.role}</h6>
            <div>●</div>
            <h6>${carditem.year}</h6>
          </div>
          <div class="pop-img">
            <img src="${carditem.imagesrc}" alt="imagesrc">
          </div>
          <div class="pop-description">
            <div class="pop-para">
            <p>${carditem.popdescription}</p>
            </div>
            <div class="pop-languages">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Ruby</li>
                <li>Bootstrap</li>
              </ul>
              <div class="pop-button">
                <button type="submit"><a href="#" class="see-live">See live
                <img class="blue" src="image" alt="frame icon">
                <img class="white" src="image" alt="frame icon"> 
                </button>
                <button type="submit"><a href="#" class="see-source">See source
                  <img class="blue" src="image" alt="frame icon">
                  <img class="white" src="image" alt="frame icon">
                </button>
              </div>
            </div>
          </div>
        </div>`;
      document.querySelector('.popup-win-container').innerHTML = popUpCardHhtml;
      openWindow();
      const closeWindow = document.querySelector('#cancel');
      closeWindow.addEventListener('click', () => {
        popUpWindow.classList.remove('open-window');
      });
    }
  }
}
cardsdataContainerSection.addEventListener('click', Selection);
