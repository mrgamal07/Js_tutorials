class parent{
    int a= 10;
}
class child extends parent{
    int a = 20;
}
class in{
public static void main(String[] args){
    parent p = new child();
    System.out.println(p.a);
}

}
