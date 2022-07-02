public class ContaPoupanca extends Conta {

    @Override
    public void imprimirExtrato() {
        System.out.println("Extrato de Conta Poupanca");
        super.imprimirInfosComuns();
    }
}
 