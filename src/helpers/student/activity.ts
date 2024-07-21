import { sessionFactory } from '@/factories/sessionFactory';
import { ActivityConfig, Element } from '@/interfaces/sessionConfig';
import { getRandomElements, selectDynamicOption } from '@/utils/random';

async function generateSession(slug: string) {
  const configs = await loadConfigs(slug);
  const selectedConfig = getFirstConfigAvailable(configs);

  if (!selectedConfig) {
    throw new Error('No config available');
  }

  const elements = getRandomElements(
    selectedConfig.elements,
    selectedConfig.maxItems
  );

  return createSession(selectedConfig, elements);
}

function createSession(config: ActivityConfig, elements: Element[]) {
  return elements.map((e) => {
    const type = selectDynamicOption(config.options);
    if (!type) {
      throw Error('Type not found');
    }

    return createSessionByType(config, type, e);
  });
}

function createSessionByType(
  config: ActivityConfig,
  type: string,
  element: Element
) {
  const session = sessionFactory(type);
  return session.generate(config, element);
}

async function loadConfigs(slug: string) {
  try {
    const data = await import(`@/assets/activities/configs/${slug}.json`);
    return data.default;
  } catch (err) {
    console.error('Error loading JSON file:', err);
    return null;
  }
}

function getFirstConfigAvailable(configs: ActivityConfig[]) {
  return configs && configs.length > 0 ? configs[0] : undefined;
}

export { generateSession };
