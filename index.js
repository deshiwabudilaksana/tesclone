var names = ['Made', 'Putu', 'Wayan'];

names.forEach(
    function(item) {
        console.log('Hai '+item);
    }
);

var dogs = {
    count : 1,
    bark : function() {
        return 'guk';
    },
    dogCount : function() {
        return this.count;
    }
};
console.log(dogs.bark());
console.log(dogs.dogCount())