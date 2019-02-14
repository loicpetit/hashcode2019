using System;

namespace hashcode2019
{
    class Hello
    {
        public String Name { get; private set; }

        public Hello(String name){
            Name = name;
        }

        public void Display(){
            Console.WriteLine("Hello World " + Name + " !");
        }
    }
}
