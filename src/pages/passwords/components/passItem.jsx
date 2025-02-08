import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export function PassItem({ data, removePass }) {

    const [isVisible, setIsVisible] = useState(false);

    const handleHidePass = () => {
        setIsVisible(!isVisible);
    }

  return (
    <Pressable style={styles.container} onLongPress={removePass}>
        <Text style={styles.password}>{isVisible ? data : "●".repeat(data.length)}</Text>
        <Ionicons 
                name={isVisible ? "eye-off" : "eye"}
                size={24}
                color="#fff"
                onPress={handleHidePass}/>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    password: {
        fontSize: 16,
        color: "#fff",
    },
});