
Vue.component('todo-item', {
  props : {
    todo : {
      type : Object,
      required : true
    }

  },
  template : `
  <li  @click="listClick(todo, $event)" >
          <input type="checkbox" v-model="todo.complete" />
          <b>{{todo.context}}</b> {{todo.name}}
        </li>
  `
  ,
  watch : {
  todos : function(changed, event) {
    console.log('todos updated');
    console.log(changed);
    console.log(event);
    localStorage.setItem('todos', JSON.stringify(changed));
  }
},
computed : {
  filteredTodos : function() {
    switch (this.filterMode) {
      case 'total' :
        return this.todos;
      case 'completed' :
        return this.todos.filter(todo => todo.complete);
      case 'incompleted' :
        return this.todos.filter(todo => !todo.complete);
    }
  }
},
methods : {
  listClick : function(todo, event) {
    todo.complete = !todo.complete;
  },
  remove : function(todos, idx, event) {

    console.log('remove index : ' + idx);

    this.todos.splice(idx, idx+1);



  }
}

})
var app = new Vue({
  el : "#app",
  data : {
    todos : [
      {
        context : 'HOME', name : 'sleep', complete : true
      }

    ],
    filterMode : 'total'
  }
});

var formTest = new Vue({
  el : '#form-text',
  data : {
    context : "HOME",
    message : 'default'
  },
  methods : {
    listPlus : function() {
      app.todos.push( { context : this.context, name : this.message, complete : false})
    }
  }
})

var counter = new Vue({
  el : '#counter',
  data : {
    counter : 0
  },
  methods : {
    count : function(ev) {
      this.counter += 1;
      console.log(ev);
      console.log(this);
    }
  }
})


var computedTest = new Vue({
  el : "#counterView",
  computed : {
    totalCount : function () {

      return app.todos.length;

    },
    completeCount : function() {

      return app.todos.filter(todo => todo.complete == true).length;

    },
    incompleteCount : function() {
      return app.todos.filter(todo => todo.complete == false).length;

    }

  }

})



var selected = new Vue({
  el : "#selectApp",
  data : {
    selected : "C"
  }
})

function counterUp(num) {
  num += 1;
}


console.log(app.message);
console.log(app.el);
