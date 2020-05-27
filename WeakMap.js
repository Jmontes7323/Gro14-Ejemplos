const items =new WeakMap();
	class Stack{
		constructor(){
			items.set(this, []);
		}
		//other
		push(element){
			let s= items.get(this);
			s.push(element);
		}
		pop(){
			let s= items.get(this);
			let r=s.pop();
			return r;
		}
	}
© 2020 GitHub, Inc.
