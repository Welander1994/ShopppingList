
var shoppingList = new Vue({
    el: "#shoppingList",
    data: {
        newItem: "",
        shoppingList: [
            {name: "mælk", collected: false},
            {name: "smør", collected: false}
        ],
    },

    methods: {
        clearAll: function() {
            this.shoppingList = []
            this.save()
        },
        deleteItem: function(key) {
            this.shoppingList.splice(key, 1)
            this.save()
            console.log(key);
        },
        addItem: function(e) {
            
            if(this.newItem !== ""){
                e.preventDefault();
                this.shoppingList.push({
                    name: this.newItem,
                    collected: false,
                })
                this.newItem = ""
                this.save()
            }
        },
        save: function() {
            localStorage.shoppingList = JSON.stringify(this.shoppingList)
        },
    },
    mounted() {
        if(localStorage.shoppingList){
            this.shoppingList = JSON.parse(localStorage.shoppingList)
        }
    },
})