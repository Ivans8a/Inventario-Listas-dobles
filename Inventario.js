class Nodo{
    constructor(cantidad, codigo, precio, nombre){
      this.cantidad = cantidad;
      this.codigo = codigo;
      this.precio = precio;
      this.nombre = nombre;
      this.sig=null;
      this.ant=null;
    }
  }
  class ListaDoble{
    constructor(){
      this.primero=null;
      this.ultimo=null;
    }
    agregar(nuevo){
      if (!this.primero){
        this.primero=nuevo;
        this.ultimo=nuevo;
      }else{
        this.ultimo.sig=nuevo;
        nuevo.ant=this.ultimo;
        this.ultimo=nuevo;
      }
    }
   
    listar(){
      let res="";
      let temp=this.primero;
      while (temp){
        res+= `
        codigo:${temp.codigo} 
        producto:${temp.nombre} 
        cantidad:${temp.cantidad}  
        precio $${temp.precio}
        `;
        temp=temp.sig;
      }
      return res;
    }

    invertir(){
        let temp = this.primero;
        let aux = null;
        while(temp !== null){
            aux = temp.ant;
            temp.ant = temp.sig;
            temp.sig = aux;

            temp=temp.ant;
        }
        aux = this.ultimo;
        this.ultimo = this.primero;
        this.primero = aux
        
    }

    buscar(codigo){
      let temp = this.primero;
      while(temp.codigo != codigo){
        temp = temp.sig;
      }
      return temp
    }

    eliminar(codigo){
      n3.ant.sig = n3.sig
    }
  }
 
  let lista=new ListaDoble();
  let n1=new Nodo(3, 123, 45, "pintura");
  let n2=new Nodo(7, 132, 90, "mouse");
  let n3=new Nodo(9, 222, 100, "teclado");
  let n4=new Nodo(2, 333, 15, "sacapuntas");
  lista.agregar(n1);
  lista.agregar(n2);
  lista.agregar(n3);
  lista.agregar(n4);
  lista.listar();
  lista.eliminar()
  console.log(lista)
  console.log(lista.listar());
  
  console.log(lista.buscar(333))