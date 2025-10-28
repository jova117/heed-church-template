// Simple test runner for the Overflow Church Network demo

import { ChurchData } from '../data/data-provider';
import { validateEmail } from './validation';
import Navigation from '../components/Navigation';

export interface TestResult {
  name: string;
  passed: boolean;
  error?: string;
  duration: number;
}

export interface TestSuite {
  name: string;
  tests: TestResult[];
  totalDuration: number;
  passed: number;
  failed: number;
}

export class TestRunner {
  private tests: Array<{ name: string; fn: () => Promise<void> | void }> = [];

  addTest(name: string, testFn: () => Promise<void> | void) {
    this.tests.push({ name, fn: testFn });
  }

  async runTests(): Promise<TestSuite> {
    const results: TestResult[] = [];
    let passed = 0;
    let failed = 0;
    const startTime = Date.now();

    for (const test of this.tests) {
      const testStart = Date.now();
      try {
        await test.fn();
        const duration = Date.now() - testStart;
        results.push({
          name: test.name,
          passed: true,
          duration
        });
        passed++;
      } catch (error) {
        const duration = Date.now() - testStart;
        results.push({
          name: test.name,
          passed: false,
          error: error instanceof Error ? error.message : String(error),
          duration
        });
        failed++;
      }
    }

    return {
      name: 'Overflow Church Network Demo Tests',
      tests: results,
      totalDuration: Date.now() - startTime,
      passed,
      failed
    };
  }
}

// Demo tests
export const runDemoTests = async (): Promise<TestSuite> => {
  const runner = new TestRunner();

  // Test 1: Church data structure
  runner.addTest('Church data has required fields', () => {
    const campusData = ChurchData.campuses;
    
    if (!Array.isArray(campusData)) {
      throw new Error('Mock campus data should be an array');
    }
    
    if (campusData.length === 0) {
      throw new Error('Mock campus data should not be empty');
    }
    
    for (const campus of campusData) {
      if (!campus.id || !campus.name || !campus.address) {
        throw new Error('Each campus should have id, name, and address');
      }
    }
  });

  // Test 2: Validation functions
  runner.addTest('Email validation works correctly', () => {
    
    const validEmail = validateEmail('test@example.com');
    if (!validEmail.isValid) {
      throw new Error('Valid email should pass validation');
    }
    
    const invalidEmail = validateEmail('invalid-email');
    if (invalidEmail.isValid) {
      throw new Error('Invalid email should fail validation');
    }
  });

  // Test 3: Campus data integrity
  runner.addTest('All campuses have service times', () => {
    const campusData = ChurchData.campuses;
    
    for (const campus of campusData) {
      if (!campus.serviceTimes || campus.serviceTimes.length === 0) {
        throw new Error(`Campus ${campus.name} should have service times`);
      }
    }
  });

  // Test 4: Navigation structure
  runner.addTest('Navigation component exists', () => {
    // This is a simple check that the component can be imported
    if (!Navigation) {
      throw new Error('Navigation component should be importable');
    }
  });

  return await runner.runTests();
};

// Utility function to run tests and log results
export const runAndLogTests = async () => {
  console.log('🧪 Running Overflow Church Network Demo Tests...\n');
  
  const results = await runDemoTests();
  
  console.log(`📊 Test Suite: ${results.name}`);
  console.log(`⏱️  Total Duration: ${results.totalDuration}ms`);
  console.log(`✅ Passed: ${results.passed}`);
  console.log(`❌ Failed: ${results.failed}\n`);
  
  for (const test of results.tests) {
    const status = test.passed ? '✅' : '❌';
    const duration = `${test.duration}ms`;
    console.log(`${status} ${test.name} (${duration})`);
    
    if (!test.passed && test.error) {
      console.log(`   Error: ${test.error}`);
    }
  }
  
  console.log(`\n🎯 Test Results: ${results.passed}/${results.tests.length} tests passed`);
  
  return results;
};
