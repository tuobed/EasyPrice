import { Injectable } from '@angular/core';
 
@Injectable()
export class ShareService {
     
    icons: string[];
    items: Array<{title: string, note: string, icon: string}>;
 
    constructor() {

        this.icons = ['Far Cry', 'FIFA 2018', 'Watch Dogs', 'Battlefield 4'];
        this.items = [];
        for (let i = 0; i < this.icons.length; i++) {
            this.items.push({
                title: this.icons[i],
                note: 'This is item #' + i,
                //icon: this.icons[Math.floor(Math.random() * this.icons.length)]
                icon: 'null'
            });
        }

    }
  
    setNewItem(titleVar, noteVar,iconVar) {
        this.items.push({
            title : titleVar,
            note : noteVar,
            icon : iconVar
        });       
    }
  
    


    removeItemProvider(item){
 
        for(let i = 0; i < this.items.length; i++) {
 
            if(this.items[i] == item){
                this.items.splice(i, 1);
            }
 
        }
        console.log(this.items + ' provider');
    }


    getItemsShared() {
        return this.items;
    }  
}