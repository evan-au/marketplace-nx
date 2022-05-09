import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { ProductInterface } from '../interfaces/product.interface';

interface ProductsState {
  collection: ProductInterface[];
  currentProductId: string | null;
}

const initialState: ProductsState = {
  collection: [],
  currentProductId: null,
};

@Injectable()
export class ProductsStore extends ComponentStore<ProductsState> {
  products$ = this.select((state) => state.collection);
  currentProductId$ = this.select((state) => state.currentProductId);
  currentProduct$ = this.select(
    this.products$,
    this.currentProductId$,
    (products, id) => products.find((prod) => prod.id === id)
  );

  constructor() {
    super(initialState);
  }

  addProduct(product: ProductInterface) {
    this.setState((state) => ({
      ...state,
      collection: [...state.collection, product],
    }));
  }

  selectProduct(productId: ProductInterface['id']) {
    this.patchState({
      currentProductId: productId,
    });
  }

  updateProduct() {
    return this.updater((state: ProductsState, product: ProductInterface) => {
      return {
        ...state,
        collection: state.collection.map((prod) => {
          if (product.id === prod.id) {
            return product;
          }
          return prod;
        }),
      };
    });
  }

  deleteProduct() {
    return this.updater(
      (state: ProductsState, productId: ProductInterface['id']) => {
        return {
          ...state,
          collection: state.collection.filter((product) => {
            if (product.id === productId) {
              return false;
            }
            return true;
          }),
        };
      }
    );
  }
}
