import Component from '@ember/component';

export default Component.extend({
    
actions: {
    showScientist(scientist) {
      alert(`Hello ${scientist.name}!`);
}
}
});
