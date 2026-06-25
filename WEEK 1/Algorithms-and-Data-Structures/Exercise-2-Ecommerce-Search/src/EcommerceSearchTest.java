import java.util.Arrays;
import java.util.Comparator;

public class EcommerceSearchTest {

    public static void main(String[] args) {

        Product[] products = {

                new Product(105, "Laptop", "Electronics"),
                new Product(101, "Shoes", "Fashion"),
                new Product(103, "Phone", "Electronics"),
                new Product(102, "Watch", "Accessories"),
                new Product(104, "Book", "Education")
        };

        System.out.println("Linear Search:");

        Product result1 = SearchAlgorithms.linearSearch(products, 103);

        if (result1 != null)
            System.out.println(result1);
        else
            System.out.println("Product not found.");

        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));

        System.out.println("\nBinary Search:");

        Product result2 = SearchAlgorithms.binarySearch(products, 103);

        if (result2 != null)
            System.out.println(result2);
        else
            System.out.println("Product not found.");
    }
}