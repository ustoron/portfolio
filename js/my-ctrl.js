app.controller("myCtrl", function(){
    var vm = this;
    vm.concerts= arrName;
    vm.change = false;
    vm.add = false;
    
    vm.remove = function(concert){
        for(var i in vm.concerts){
            if(vm.concerts[i].name == concert.name){
                vm.concerts.splice(i,1);
            }
        }
    }
    vm.changeConcerts= function(concert){
        for(var i in vm.concerts){
            if(vm.concerts[i].name == concert.name){
                vm.changeConcert = vm.concerts[i];
                vm.change = true;
            }
        }
    }
    
    
    vm.finishChange = function(){
        vm.changeConcert = {};
        vm.change = false;
    }
    
    vm.addToConcert = function(){
        vm.concerts.push(vm.addConcert);
        vm.addConcert = {};
        vm.add = false;
    }
    
    vm.filterConcert = function(concert){
        if(concert.name.indexOf(vm.filter) != -1 || !vm.filter || concert.name.indexOf(vm.filter.toUpperCase()) != -1){
            return true;
        }
        return false;
    }

})



