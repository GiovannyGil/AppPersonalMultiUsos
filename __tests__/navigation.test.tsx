/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';
import { MODULES } from '../src/context/modules';

const renderApp = async () => {
  let tree!: ReactTestRenderer.ReactTestRenderer;
  await ReactTestRenderer.act(() => {
    tree = ReactTestRenderer.create(<App />);
  });
  return tree;
};

test('inicia en el home', async () => {
  const tree = await renderApp();

  expect(JSON.stringify(tree.toJSON())).toContain('módulos para ordenar');

  await ReactTestRenderer.act(() => tree.unmount());
});

test.each(MODULES.map(({ title, description }) => [title, `${title}. ${description}`]))(
  'abre el módulo %s desde el home',
  async (title, label) => {
    const tree = await renderApp();

    const [card] = tree.root.findAll(
      node =>
        node.props.accessibilityLabel === label &&
        typeof node.props.onPress === 'function',
    );
    expect(card).toBeDefined();

    await ReactTestRenderer.act(() => card.props.onPress());

    const treeText = JSON.stringify(tree.toJSON());
    expect(treeText).toContain('Módulo en preparación');
    expect(treeText).toContain(`"Bienvenido a ","${title}"`);

    await ReactTestRenderer.act(() => tree.unmount());
  },
);
