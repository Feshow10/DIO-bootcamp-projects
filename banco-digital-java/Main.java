public class Main {
    public static void main(String[] args) {
        Conta cc = new ContaCorrente();
        Conta cp = new ContaPoupanca();

        cc.imprimirExtrato();
        cp.imprimirExtrato();

        cc.depositar(200);
        cc.imprimirExtrato();

        cc.transferir(50,cp);
        cc.imprimirExtrato();
        cp.imprimirExtrato();
    }
}
 