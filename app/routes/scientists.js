import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{scid: 1, name: 'Marie Curie', type: 'Chemistry', img: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Marie_Curie_c1920.png'},
    {scid: 2, name: 'Mae Jemison', type: 'Space', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Dr._Mae_C._Jemison%2C_First_African-American_Woman_in_Space_-_GPN-2004-00020.jpg/1200px-Dr._Mae_C._Jemison%2C_First_African-American_Woman_in_Space_-_GPN-2004-00020.jpg'},
    {scid: 3, name: 'Albert Hofmann', type: 'Chemistry', img: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2008/04/30/hoffmanbw460.jpg'},            
    {scid: 4, name: 'Isaac Newton', type: 'Physics, Astronomy, & Mathematics', img: 'http://images.fineartamerica.com/images-medium-large/1689-sir-isaac-newton-portrait-young-paul-d-stewart.jpg'},
    {scid: 5, name: 'Sigmund Freud', type: 'Neurology, Psychotherapy, & Psychoanalysis', img: 'http://upload.wikimedia.org/wikipedia/commons/e/e9/Sigmund_Freud_1926.jpg'},
    {scid: 6, name: 'Albert Einstein', type: 'Physics', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/1920px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg'},                
    {scid: 7, name: 'Gregor Mendel', type: 'Genetics', img: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Gregor_Mendel_2.jpg'}, 
    {scid: 8, name: 'Maria Mitchell', type: '...', img: '...'},
    {scid: 9, name: 'Inge Lehmann', type: '...', img: '...'},
    {scid: 10, name: 'Otto Hahn', type: '...', img: '...'},    
            
            
                   

           
           ];
  }
});
