const Ajv = require('ajv');

const JsonSchemaValidator = require('../../../../lib/validation/JsonSchemaValidator');
const ValidationResult = require('../../../../lib/validation/ValidationResult');

const getLovelyDapContract = require('../../../../lib/test/fixtures/getLovelyDapContract');
const getLovelyDapObjects = require('../../../../lib/test/fixtures/getLovelyDapObjects');

const validateSTPacketStructureFactory = require('../../../../lib/stPacket/validation/validateSTPacketStructureFactory');

const { expectJsonSchemaError } = require('../../../../lib/test/expect/expectError');

describe('validateSTPacketStructure', () => {
  let rawStPacket;
  let rawDapContract;
  let rawDapObjects;
  let validateSTPacketStructure;

  beforeEach(() => {
    const ajv = new Ajv();
    const validator = new JsonSchemaValidator(ajv);

    validateSTPacketStructure = validateSTPacketStructureFactory(validator);

    rawDapContract = getLovelyDapContract();
    rawDapObjects = getLovelyDapObjects();
    rawStPacket = {
      contractId: '6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b',
      itemsMerkleRoot: '6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b',
      itemsHash: '6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b',
      contracts: [],
      objects: rawDapObjects,
    };
  });

  describe('contractId', () => {
    it('should be present', () => {
      delete rawStPacket.contractId;

      const result = validateSTPacketStructure(rawStPacket);

      expectJsonSchemaError(result);

      const [error] = result.getErrors();

      expect(error.dataPath).to.be.equal('');
      expect(error.keyword).to.be.equal('required');
      expect(error.params.missingProperty).to.be.equal('contractId');
    });

    it('should be a string', () => {
      rawStPacket.contractId = 1;

      const result = validateSTPacketStructure(rawStPacket);

      expectJsonSchemaError(result);

      const [error] = result.getErrors();

      expect(error.dataPath).to.be.equal('.contractId');
      expect(error.keyword).to.be.equal('type');
    });

    it('should not be less than 64 chars', () => {
      rawStPacket.contractId = '86b273ff';

      const result = validateSTPacketStructure(rawStPacket);

      expectJsonSchemaError(result);

      const [error] = result.getErrors();

      expect(error.dataPath).to.be.equal('.contractId');
      expect(error.keyword).to.be.equal('minLength');
    });

    it('should not be longer than 64 chars', () => {
      rawStPacket.contractId = '86b273ff86b273ff86b273ff86b273ff86b273ff86b273ff86b273ff86b273ff86b273ff86b273ff86b273ff86b273ff86b273ff';

      const result = validateSTPacketStructure(rawStPacket);

      expectJsonSchemaError(result);

      const [error] = result.getErrors();

      expect(error.dataPath).to.be.equal('.contractId');
      expect(error.keyword).to.be.equal('maxLength');
    });
  });

  describe('itemsMerkleRoot', () => {
    it('should be present', () => {
      delete rawStPacket.itemsMerkleRoot;

      const result = validateSTPacketStructure(rawStPacket);

      expectJsonSchemaError(result);

      const [error] = result.getErrors();

      expect(error.dataPath).to.be.equal('');
      expect(error.keyword).to.be.equal('required');
      expect(error.params.missingProperty).to.be.equal('itemsMerkleRoot');
    });

    it('should be a string', () => {
      rawStPacket.itemsMerkleRoot = 1;

      const result = validateSTPacketStructure(rawStPacket);

      expectJsonSchemaError(result);

      const [error] = result.getErrors();

      expect(error.dataPath).to.be.equal('.itemsMerkleRoot');
      expect(error.keyword).to.be.equal('type');
    });

    it('should not be less than 64 chars', () => {
      rawStPacket.itemsMerkleRoot = '86b273ff';

      const result = validateSTPacketStructure(rawStPacket);

      expectJsonSchemaError(result);

      const [error] = result.getErrors();

      expect(error.dataPath).to.be.equal('.itemsMerkleRoot');
      expect(error.keyword).to.be.equal('minLength');
    });

    it('should not be longer than 64 chars', () => {
      rawStPacket.itemsMerkleRoot = '86b273ff86b273ff86b273ff86b273ff86b273ff86b273ff86b273ff86b273ff86b273ff86b273ff86b273ff86b273ff86b273ff';

      const result = validateSTPacketStructure(rawStPacket);

      expectJsonSchemaError(result);

      const [error] = result.getErrors();

      expect(error.dataPath).to.be.equal('.itemsMerkleRoot');
      expect(error.keyword).to.be.equal('maxLength');
    });
  });

  describe('itemsHash', () => {
    it('should be present', () => {
      delete rawStPacket.itemsHash;

      const result = validateSTPacketStructure(rawStPacket);

      expectJsonSchemaError(result);

      const [error] = result.getErrors();

      expect(error.dataPath).to.be.equal('');
      expect(error.keyword).to.be.equal('required');
      expect(error.params.missingProperty).to.be.equal('itemsHash');
    });

    it('should be a string', () => {
      rawStPacket.itemsHash = 1;

      const result = validateSTPacketStructure(rawStPacket);

      expectJsonSchemaError(result);

      const [error] = result.getErrors();

      expect(error.dataPath).to.be.equal('.itemsHash');
      expect(error.keyword).to.be.equal('type');
    });

    it('should not be less than 64 chars', () => {
      rawStPacket.itemsHash = '86b273ff';

      const result = validateSTPacketStructure(rawStPacket);

      expectJsonSchemaError(result);

      const [error] = result.getErrors();

      expect(error.dataPath).to.be.equal('.itemsHash');
      expect(error.keyword).to.be.equal('minLength');
    });

    it('should not be longer than 64 chars', () => {
      rawStPacket.itemsHash = '86b273ff86b273ff86b273ff86b273ff86b273ff86b273ff86b273ff86b273ff86b273ff86b273ff86b273ff86b273ff86b273ff';

      const result = validateSTPacketStructure(rawStPacket);

      expectJsonSchemaError(result);

      const [error] = result.getErrors();

      expect(error.dataPath).to.be.equal('.itemsHash');
      expect(error.keyword).to.be.equal('maxLength');
    });
  });

  describe('objects', () => {
    it('should be present', () => {
      delete rawStPacket.objects;

      const result = validateSTPacketStructure(rawStPacket);

      expectJsonSchemaError(result);

      const [error] = result.getErrors();

      expect(error.dataPath).to.be.equal('');
      expect(error.keyword).to.be.equal('required');
      expect(error.params.missingProperty).to.be.equal('objects');
    });

    it('should be an array', () => {
      rawStPacket.objects = 1;

      const result = validateSTPacketStructure(rawStPacket);

      expectJsonSchemaError(result);

      const [error] = result.getErrors();

      expect(error.dataPath).to.be.equal('.objects');
      expect(error.keyword).to.be.equal('type');
    });

    it('should not contain more than 1000 items', () => {
      const thousandDapObjects = (new Array(1001)).fill(rawDapObjects[0]);
      rawStPacket.objects.push(...thousandDapObjects);

      const result = validateSTPacketStructure(rawStPacket);

      expectJsonSchemaError(result, 3);

      const errors = result.getErrors();

      expect(errors).to.be.an('array').and.lengthOf(3);

      expect(errors[0].dataPath).to.be.equal('.objects');
      expect(errors[0].keyword).to.be.equal('maxItems');

      expect(errors[1].dataPath).to.be.equal('.objects');
      expect(errors[1].keyword).to.be.equal('maxItems');

      expect(errors[2].dataPath).to.be.equal('');
      expect(errors[2].keyword).to.be.equal('oneOf');
      expect(errors[2].params.passingSchemas).to.be.null();
    });
  });

  describe('contracts', () => {
    it('should be present', () => {
      delete rawStPacket.contracts;

      const result = validateSTPacketStructure(rawStPacket);

      expectJsonSchemaError(result);

      const [error] = result.getErrors();

      expect(error.dataPath).to.be.equal('');
      expect(error.keyword).to.be.equal('required');
      expect(error.params.missingProperty).to.be.equal('contracts');
    });

    it('should be an array', () => {
      rawStPacket.contracts = 1;

      const result = validateSTPacketStructure(rawStPacket);

      expectJsonSchemaError(result);

      const [error] = result.getErrors();

      expect(error.dataPath).to.be.equal('.contracts');
      expect(error.keyword).to.be.equal('type');
    });

    it('should not contain more than one contract', () => {
      rawStPacket.contracts.push(rawDapContract, rawDapContract);

      const result = validateSTPacketStructure(rawStPacket);

      expectJsonSchemaError(result, 3);

      const errors = result.getErrors();

      expect(errors[0].dataPath).to.be.equal('.objects');
      expect(errors[0].keyword).to.be.equal('maxItems');

      expect(errors[1].dataPath).to.be.equal('.contracts');
      expect(errors[1].keyword).to.be.equal('maxItems');

      expect(errors[2].dataPath).to.be.equal('');
      expect(errors[2].keyword).to.be.equal('oneOf');
      expect(errors[2].params.passingSchemas).to.be.null();
    });
  });

  it('should return error if packet is empty', () => {
    rawStPacket.contracts = [];
    rawStPacket.objects = [];

    const result = validateSTPacketStructure(rawStPacket);

    expectJsonSchemaError(result);

    const [error] = result.getErrors();

    expect(error.keyword).to.be.equal('oneOf');
    expect(error.params.passingSchemas).to.be.deep.equal([0, 1]);
  });

  it('should return error if packet contains the both objects and contracts', () => {
    rawStPacket.contracts.push(rawDapContract);

    const result = validateSTPacketStructure(rawStPacket);

    expectJsonSchemaError(result, 3);

    const errors = result.getErrors();

    expect(errors[0].dataPath).to.be.equal('.objects');
    expect(errors[0].keyword).to.be.equal('maxItems');

    expect(errors[1].dataPath).to.be.equal('.contracts');
    expect(errors[1].keyword).to.be.equal('maxItems');

    expect(errors[2].dataPath).to.be.equal('');
    expect(errors[2].keyword).to.be.equal('oneOf');
    expect(errors[2].params.passingSchemas).to.be.null();
  });

  it('should return error if there are additional properties in the packet', () => {
    const additionalProperty = 'additionalStuff';

    rawStPacket[additionalProperty] = {};

    const result = validateSTPacketStructure(rawStPacket);

    expectJsonSchemaError(result);

    const [error] = result.getErrors();

    expect(error.dataPath).to.be.equal('');
    expect(error.keyword).to.be.equal('additionalProperties');
    expect(error.params.additionalProperty).to.be.equal(additionalProperty);
  });

  it('should return valid result if packet structure is correct', () => {
    const result = validateSTPacketStructure(rawStPacket);

    expect(result).to.be.instanceOf(ValidationResult);
    expect(result.isValid()).to.be.true();
  });
});
