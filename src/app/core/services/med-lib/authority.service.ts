import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorityService {
  public roles = [];
  public interactMaxtrix = {};
  public functions = [];
  public functionMaxtrix = [];
  constructor() { }

  /**
   * regist roles
   * @param roles roles array
   */
  registRoles(roles: any) {
    this.roles = roles;
  }

  /**
   * regist authority of one action among roles
   * @param name name of interaction(action)
   * @param matrix matrix of certain action
   */
  registInteraction(name: string, matrix: any) {
    this.interactMaxtrix[name] = matrix;
  }

  /**
   * regist functions and functions for each role
   * @param functionsArray array of functions
   * @param functionsForRoles object, k:v = role name : array of function name
   */
  registFunctions(functionsArray: any, functionsForRoles: any) {
    this.functions = functionsArray;
    // init functionMaxtrix
    this.roles.forEach(() => {
      const funcForRole = [];
      functionsArray.forEach(() => {
        funcForRole.push(false);
      });
      this.functionMaxtrix.push(funcForRole);
    });
    // assign functions for roles
    for (const r of Object.keys(functionsForRoles)) {
      const rIndex = this.roles.indexOf(r);
      console.log(r, functionsForRoles);
      functionsForRoles[r].forEach(f => {
        const fIndex = functionsArray.indexOf(f);
        this.functionMaxtrix[rIndex][fIndex] = true;
      });
    }
  }

  /**
   * check whether role A has the authority to do action to role B
   * @param roleA role to act
   * @param roleB role to be acted
   * @param matrix optional, a certain interation matrix name, or check for each matrix
   */
  checkA2B(roleA: string, roleB: string, matrix?: string) {
    const indexA = this.roles.indexOf(roleA);
    const indexB = this.roles.indexOf(roleB);
    let result = true;
    if (!!matrix) {
      result = this.interactMaxtrix[matrix][indexA][indexB] === -1 ? false : true;
    } else {
      for (const k of Object.keys(this.interactMaxtrix)) {
        if (this.interactMaxtrix[k][indexA][indexB] === -1) {
          result = false;
        }
      }
    }
    return result;
  }

  getRoles2DoAction(sourceRole: string, action: string) {
    const roles2DoAction = [];
    const sourceRoleIndex = this.roles.indexOf(sourceRole);
    this.interactMaxtrix[action][sourceRoleIndex].forEach((n, i) => {
      if (n === 1) {
        roles2DoAction.push(this.roles[i]);
      }
    });
    return roles2DoAction;
  }

  /**
   * get functions for a certain role
   * @param role role name
   */
  getFunctionsForRole(role: string) {
    const roleIndex = this.roles.indexOf(role);
    const functions = [];
    this.functionMaxtrix[roleIndex].forEach((f, i) => {
      if (f === true) {
        functions.push(this.functions[i]);
      }
    });
    return functions;
  }

  checkAll() {
    return this.functionMaxtrix;
  }
}
