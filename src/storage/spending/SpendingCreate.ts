import AsyncStorage from "@react-native-async-storage/async-storage";
import { SpendingStorageDTO } from "./SpendingStorageDTO";
import { SPENDING_COLLECTION } from "../storageConfig";

export async function spendingCreate(newSpending: SpendingStorageDTO) {
  try {
    await AsyncStorage.setItem('key', SPENDING_COLLECTION)
  } catch (error) {
    throw error;
  }
}