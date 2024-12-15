# Is This Zero?

![npm](https://img.shields.io/npm/v/isthiszero) ![npm](https://img.shields.io/npm/dt/isthiszero)

Is This Zero?

## Installation

Install the library via npm:

```bash
npm install isthiszero
```

## Example
```typescript
import { IsThisZero } from 'isthiszero';

const checker = new IsThisZero();

const values = [0, '0', 1, '1', null, undefined, 'zero', 10, '', 'शून्य'];

values.forEach((value) => {
    const result = checker.isthiszero(value);
    console.log(`Value: ${value}, Is this zero? ${result}`);
});
```

## Contributing

Please submit issues or pull requests via [GitHub](https://github.com/whitespaca/isthiszero).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.