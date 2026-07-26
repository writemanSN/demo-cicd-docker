package com.example.demo;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class DemoApplicationTests {

    @Test
    void additionSimple() {
        assertEquals(4, 2 + 2);
    }

    @Test
    void itemGarderSonNom() {
        Item item = new Item("Paracetamol");
        assertEquals("Paracetamol", item.getName());
    }
}
